namespace DataBaseLib.Entyties
{
    public class Order
    {
        public int Id { get; set; }
        public string? SourceCity { get; set; }
        public string? SourceAddress { get; set; }
        public string? DistCity { get; set; }
        public string? DistAddress { get; set; }
        public float? Weight { get; set; }
        public DateTime Date { get; set; } 
    }
}
