
namespace CMCI.Models
{
    using System;
    using System.Collections.Generic;

    public class Indicator
    {
        public long IndicatorId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }

        public virtual List<IndicatorType> IndicatorTypes { get; set; }
    }
}