const isLocalAppHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
const useLocalSupabase = isLocalAppHost && new URLSearchParams(window.location.search).get("supabase") === "local";

window.SUPABASE_CONFIG = useLocalSupabase
  ? {
      url: "http://127.0.0.1:54321",
      publishableKey: "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH"
    }
  : {
      url: "https://pxbqalvbgbyybhlnqvvy.supabase.co",
      publishableKey: "sb_publishable_WqCEK107DY-v2qsc6ezU7g_lFvV8TjF"
    };
