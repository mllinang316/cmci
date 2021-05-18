
namespace CMCI.Models
{
    using CMCI.Enums;
    using System;
    using System.Collections.Generic;

    public class LocalGovernment
    {
        public long LocalGovernmentId { get; set; }
        
        public string Name { get; set; }

        public string Description { get; set; }

        public LguType LguType { get; set; }

        public IncomeClassification IncomeClassification { get; set; }

        public CityClassification CityClassification { get; set; }

        public long Population { get; set; }

        public string LocalMayor { get; set; }

        public string CityHallAddress { get; set; }

        public string LocalWebsite { get; set; }

        public string LocalPhoneNumber { get; set; }

        public string LocalFaxNumber { get; set; }

        public string Email { get; set; }

        public string LocalFocalPerson { get; set; }

        public string FocalDepartment { get; set; }

        public string FocalPhoneNumber { get; set; }

        public string FocalEmail { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }

        public virtual List<Index> Indices { get; set; }

    }
}
