using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ServiceApp.Logging;
using ServiceApp.Models;
using System;

namespace ServiceApp.Extensions
{
    /// <summary>
    /// ADAL JwtBearer configuration
    /// </summary>
    public static class AuthenticationBuilderExtensions
    {
        public static AuthenticationBuilder AddAzureAdBearer(this AuthenticationBuilder builder, Action<AzureAdOptions> configureOptions)
        {
            builder.Services.Configure(configureOptions);
            builder.Services.AddSingleton<IConfigureOptions<JwtBearerOptions>, ConfigureAzureOptions>();
            builder.AddJwtBearer();
            return builder;
        }

        private class ConfigureAzureOptions : IConfigureNamedOptions<JwtBearerOptions>
        {
            private readonly AzureAdOptions _azureOptions;
            private readonly ILogger _logger;

            public ConfigureAzureOptions(IOptions<AzureAdOptions> azureOptions, ILoggerFactory loggerFactory)
            {
                _azureOptions = azureOptions.Value;
                _logger = loggerFactory.CreateLogger<MyJwtBearerEvents>();
            }

            public void Configure(string name, JwtBearerOptions options)
            {
                options.Audience = _azureOptions.ClientId;

                options.Authority = $"{_azureOptions.Instance}{_azureOptions.TenantId}";

                options.Events = new MyJwtBearerEvents(_logger);
            }

            public void Configure(JwtBearerOptions options)
            {
                Configure(Options.DefaultName, options);
            }
        }
    }
}
