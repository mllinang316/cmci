
namespace CMCI.Models
{
    using System;

    public class Account
    {
        public long AccountId { get; set; }

        public string Lastname { get; set; }

        public string Firstname { get; set; }

        public string Middlename { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string MobileNo { get; set; }

        public string Address { get; set; }

        public string Email { get; set; }

        public string Photo { get; set; }

        public DateTime BirthDate { get; set; }

        public int AccountType { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }
    }
}