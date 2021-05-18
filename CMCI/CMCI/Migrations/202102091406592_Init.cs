namespace CMCI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Accounts",
                c => new
                    {
                        AccountId = c.Long(nullable: false, identity: true),
                        Lastname = c.String(unicode: false),
                        Firstname = c.String(unicode: false),
                        Middlename = c.String(unicode: false),
                        Username = c.String(unicode: false),
                        Password = c.String(unicode: false),
                        MobileNo = c.String(unicode: false),
                        Address = c.String(unicode: false),
                        Email = c.String(unicode: false),
                        Photo = c.String(unicode: false),
                        BirthDate = c.DateTime(nullable: false, precision: 0),
                        AccountType = c.Int(nullable: false),
                        CreatedDate = c.DateTime(nullable: false, precision: 0),
                        UpdatedDate = c.DateTime(nullable: false, precision: 0),
                    })
                .PrimaryKey(t => t.AccountId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Accounts");
        }
    }
}
