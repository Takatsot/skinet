using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager){

            if(!userManager.Users.Any()){
                var user = new AppUser
                {
                    DisplayName = "Nsika",
                    Email = "nsika@test.com",
                    UserName = "nsika@test.com",
                    Address = new Address 
                    {
                        FirstName = "Nsika",
                        LastName = "Yesizwe",
                        Street = "17 AG Visser Street",
                        City = "Capetownk",
                        State = "WC",
                        ZipCode = "7500"
                    }
                };
                await userManager.CreateAsync(user,"Pa$$w0rd");
            }
        }
    }
}