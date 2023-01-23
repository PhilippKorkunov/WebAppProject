using DataBaseLib.Entyties;

namespace ReactProject.Models
{
    public class OrderWithStringTime
    {
        public int Id { get; set; }
        public string? SourceCity { get; set; }
        public string? SourceAddress { get; set; }
        public string? DistCity { get; set; }
        public string? DistAddress { get; set; }
        public float? Weight { get; set; }
        public string Date { get; set; }
        public OrderWithStringTime(Order order) 
        { 
            Id = order.Id;
            SourceCity = order.SourceCity;
            SourceAddress = order.SourceAddress;
            DistCity = order.DistCity;
            DistAddress = order.DistAddress;
            Weight = order.Weight;
            Date = order.Date.ToString("dd.MM.yyyy");
        }
    }
}
