
namespace CMCI.Models
{
    using System;

    public class IndicatorType
    {
        public long IndicatorTypeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Value { get; set; }

        public DateTime PeriodCovered { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }
    }
}