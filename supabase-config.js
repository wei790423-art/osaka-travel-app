const isLocalSupabaseHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

window.SUPABASE_CONFIG = isLocalSupabaseHost
  ? {
      url: "http://127.0.0.1:54321",
      publishableKey: "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH"
    }
  : {
      url: "https://pxbqalvbgbyybhlnqvvy.supabase.co",
      publishableKey: "sb_publishable_WqCEK107DY-v2qsc6ezU7g_lFvV8TjF"
    };
