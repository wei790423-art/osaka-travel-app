const isLocalSupabaseHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

window.SUPABASE_CONFIG = isLocalSupabaseHost
  ? {
      url: "http://127.0.0.1:54321",
      publishableKey: "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH"
    }
  : {
      url: "https://lmvbzbttpelygnhjjckf.supabase.co",
      publishableKey: "sb_publishable_ttuHHquUpv-_QSwOCWNBuw_YvH-EDOJ"
    };
