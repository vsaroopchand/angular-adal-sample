using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ServiceApp.Models;
using System;

namespace ServiceApp.Extensions
{    
    /// <summary>
    /// MSAL JwtBearer Configuration (v2)
    /// </summary>
    public static class AzureAdServiceCollectionExtensionsV2
    {
 
        public static AuthenticationBuilder AddAzureAdBearerV2(this AuthenticationBuilder builder, Action<AzureAdOptions> configureOptions)
        {
            builder.Services.Configure(configureOptions);
            builder.Services.AddSingleton<IConfigureOptions<JwtBearerOptions>, ConfigureAzureOptions>();
            builder.AddJwtBearer();
            return builder;
        }

        private class ConfigureAzureOptions : IConfigureNamedOptions<JwtBearerOptions>
        {
            private readonly AzureAdOptions _azureOptions;

            public ConfigureAzureOptions(IOptions<AzureAdOptions> azureOptions)
            {
                _azureOptions = azureOptions.Value;
            }

            public void Configure(string name, JwtBearerOptions options)
            {
                options.Audience = _azureOptions.ClientId;
                options.Authority = $"{_azureOptions.Instance}{_azureOptions.TenantId}/v2.0/";
                options.TokenValidationParameters.ValidateIssuer = true;
                options.TokenValidationParameters.IssuerValidator = ValidateIssuer;
            }

            private string ValidateIssuer(string issuer, SecurityToken securityToken, TokenValidationParameters validationParameters)
            {
                Uri issuerUri = new Uri(issuer);
                Uri knownIssuerUri = new Uri(_azureOptions.IssuerV2);
                
                if (knownIssuerUri.AbsolutePath.Equals(issuerUri.AbsolutePath, StringComparison.OrdinalIgnoreCase))
                {                   
                    return issuer;
                }
                else
                {
                    throw new SecurityTokenInvalidIssuerException("Unknown issuer");
                }
            }

            public void Configure(JwtBearerOptions options)
            {
                Configure(Options.DefaultName, options);
            }
        }
    }
}
