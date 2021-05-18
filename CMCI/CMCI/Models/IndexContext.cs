
namespace CMCI.Models
{
    using MySql.Data.Entity;
    using System.Data.Entity;
    using System.Data.Entity.Validation;
    using System.Text;

    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class IndexContext : DbContext
    {
        public IndexContext()
            :base("name=IndexContext")
        {

        }

        public DbSet<Account> Accounts { get; set; }

        public DbSet<Province> Provinces { get; set; }

        public DbSet<LocalGovernment> LocalGovernments { get; set; }

        public DbSet<Index> Indices { get; set; }

        public DbSet<Indicator> Indicators { get; set; }

        public DbSet<IndicatorType> indicatorTypes { get; set; }

        public override int SaveChanges()
        {
            try
            {
                return base.SaveChanges();
            }
            catch (DbEntityValidationException exception)
            {
                var sb = new StringBuilder();

                sb.AppendLine(exception.Message);

                foreach (var valError in exception.EntityValidationErrors)
                {
                    sb.AppendLine($"Entity \"{valError.Entry.Entity.GetType().Name}\" in state \" {valError.Entry.State}\", errors:");

                    foreach (var error in valError.ValidationErrors)
                    {
                        sb.AppendLine($"\t(Property: \"{error.PropertyName}\", Error: \"{error.ErrorMessage}\")");
                    }
                }

                throw new DbEntityValidationException(sb.ToString(), exception);
            }
        }
    }
}