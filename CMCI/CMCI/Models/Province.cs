
namespace CMCI.Models
{
    using System;
    using System.Collections.Generic;

    public class Province
    {
        public long ProvinceId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Region { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }

        public virtual List<LocalGovernment> LocalGovernments { get; set; }
    }
}