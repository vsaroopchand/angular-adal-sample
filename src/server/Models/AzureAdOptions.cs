namespace ServiceApp.Models
{
    public class AzureAdOptions
    {
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string Instance { get; set; }
        public string Domain { get; set; }
        public string TenantId { get; set; }

        public string Authority
        {
            get
            {
                return $"{Instance}{TenantId}";
            }
        }

        public string AuthorityV2
        {
            get
            {
                return $"https://login.microsoftonline.com/{this.TenantId}/";
            }
        }

        public string IssuerV2
        {
            get
            {
                return $"https://sts.windows.net/{this.TenantId}/";
            }
        }
    }
    public class AzureAdOptionsExtended : AzureAdOptions
    {
        public string CallbackPath { get; set; }


        public string ResourceId { get; set; }
        public string ServiceAddress { get; set; }

        public static AzureAdOptionsExtended Settings { set; get; }
    }
}
