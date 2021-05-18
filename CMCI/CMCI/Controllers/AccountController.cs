
namespace CMCI.Controllers
{
    using CMCI.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.Owin.Security;
    using System;
    using System.Linq;
    using System.Security.Claims;
    using System.Web;
    using System.Web.Mvc;

    public class AccountController : Controller
    {
        private IndexContext context = new IndexContext();

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(string username, string password)
        {
            var user = this.context.Accounts.Where(e => e.Username == username && e.Password == password).FirstOrDefault();

            if (user != null)
            {
                var identity = new ClaimsIdentity(new[] {
                    new Claim(ClaimTypes.Name, !string.IsNullOrEmpty(user.Firstname) ? $"{user.Firstname} {user.Lastname}" : "No name"),
                    new Claim(ClaimTypes.Role, user.AccountType.ToString()),
                    new Claim(ClaimTypes.Email, user.Email)
                }, "ApplicationCookie");

                var auth = Request.GetOwinContext();
                var authManager = auth.Authentication;
                authManager.SignIn(new AuthenticationProperties()
                {
                    AllowRefresh = true,
                    IsPersistent = false,
                    ExpiresUtc = DateTime.UtcNow.AddDays(7)
                }, identity);

                return Json("Success", JsonRequestBehavior.AllowGet);
            }

            return Json("Failed", JsonRequestBehavior.AllowGet);

        }

        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult RegisterUser(Account model)
        {
            try
            {
                this.context.Accounts.Add(model);
                this.context.SaveChanges();
                return Json("Success", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                return Json("Failed", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult Logout()
        {
            var ctx = Request.GetOwinContext();
            var authManager = ctx.Authentication;
            authManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            return Redirect("~/");
        }
    }
}