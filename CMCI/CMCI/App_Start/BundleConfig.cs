using System.Web;
using System.Web.Optimization;

namespace CMCI
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Scripts
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/swalert/sweetalert2.all.min.js",
                      "~/Scripts/sbadmin/scripts.js"));

            bundles.Add(new ScriptBundle("~/bundles/datatable/jquery")
                .Include("~/Scripts/datatable/jquery.dataTables.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/datatable/bootstrap")
                .Include("~/Scripts/datatable/dataTables.bootstrap4.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/date-sorter")
                .Include("~/Scripts/datatable/datatables.dateSorter.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // Styles
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/sbadmin/styles.css",
                      "~/Content/Site.css",
                      "~/Content/swalert/sweetalert2.min.css",
                      "~/Content/all.min.css"));

            bundles.Add(new StyleBundle("~/Content/datatable-css")
                .Include("~/Content/datatable/dataTables.bootstrap4.min.css"));
        }
    }
}
