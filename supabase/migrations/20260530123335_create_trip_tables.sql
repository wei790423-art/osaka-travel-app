create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

revoke execute on function public.set_updated_at() from public;
revoke execute on function public.set_updated_at() from anon;
revoke execute on function public.set_updated_at() from authenticated;

create table public.trips (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null default '未命名旅行',
  country text not null default '自選國家',
  base_city text not null default '自選城市',
  start_date date,
  trip_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint trips_name_length check (char_length(name) between 1 and 120),
  constraint trips_trip_data_object check (jsonb_typeof(trip_data) = 'object')
);

create index trips_user_updated_idx on public.trips (user_id, updated_at desc);
create index trips_trip_data_gin_idx on public.trips using gin (trip_data);

create trigger set_trips_updated_at
before update on public.trips
for each row
execute function public.set_updated_at();

alter table public.trips enable row level security;

grant select, insert, update, delete on public.trips to authenticated;

create policy "Users can read own trips"
on public.trips
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create own trips"
on public.trips
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update own trips"
on public.trips
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete own trips"
on public.trips
for delete
to authenticated
using ((select auth.uid()) = user_id);

create table public.trip_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  trip_id uuid references public.trips(id) on delete set null,
  reason text not null default '手動儲存',
  trip_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint trip_history_reason_length check (char_length(reason) between 1 and 80),
  constraint trip_history_trip_data_object check (jsonb_typeof(trip_data) = 'object')
);

create index trip_history_user_created_idx on public.trip_history (user_id, created_at desc);
create index trip_history_trip_id_idx on public.trip_history (trip_id);

alter table public.trip_history enable row level security;

grant select, insert, delete on public.trip_history to authenticated;

create policy "Users can read own history"
on public.trip_history
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create own history"
on public.trip_history
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can delete own history"
on public.trip_history
for delete
to authenticated
using ((select auth.uid()) = user_id);

create table public.trip_shares (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references public.trips(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  share_token uuid not null default gen_random_uuid(),
  snapshot_data jsonb not null default '{}'::jsonb,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint trip_shares_snapshot_data_object check (jsonb_typeof(snapshot_data) = 'object'),
  constraint trip_shares_token_unique unique (share_token)
);

create index trip_shares_user_created_idx on public.trip_shares (user_id, created_at desc);
create index trip_shares_trip_id_idx on public.trip_shares (trip_id);
create index trip_shares_token_idx on public.trip_shares (share_token);

create trigger set_trip_shares_updated_at
before update on public.trip_shares
for each row
execute function public.set_updated_at();

alter table public.trip_shares enable row level security;

grant select, insert, update, delete on public.trip_shares to authenticated;

create policy "Users can read own shares"
on public.trip_shares
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create own shares"
on public.trip_shares
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update own shares"
on public.trip_shares
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete own shares"
on public.trip_shares
for delete
to authenticated
using ((select auth.uid()) = user_id);
