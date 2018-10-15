using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace ServiceApp.Logging
{
    public class MyJwtBearerEvents : JwtBearerEvents
    {
        private readonly ILogger _logger;

        public MyJwtBearerEvents(ILogger logger)
        {
            _logger = logger;
        }

        public override Task AuthenticationFailed(AuthenticationFailedContext context)
        {
            _logger.LogError(context.Exception.Message);
            return base.AuthenticationFailed(context);
        }

        public override Task Challenge(JwtBearerChallengeContext context)
        {
            return base.Challenge(context);
        }
        public override Task MessageReceived(MessageReceivedContext context)
        {
            return base.MessageReceived(context);
        }

        /// <summary>
        /// This method contains the logic that validates the user's tenant and normalizes claims.
        /// </summary>
        /// <param name="context">The validated token context</param>
        /// <returns>A task</returns>
        public override Task TokenValidated(TokenValidatedContext context)
        {
            return base.TokenValidated(context);
        }
    }
}
