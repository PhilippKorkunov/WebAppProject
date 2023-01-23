using DataBaseLib.Entyties;
using Newtonsoft.Json;
using System.Text;
using System.Text.Json;

namespace ReactProject.Models
{
    public class Converter
    {
        public Dictionary<string, string> JsonDict {get; set;}
        public Converter(JsonDocument jsonDocument) 
        { 
            JsonDict = ToJsonDict(jsonDocument);
        }

        public Converter(string jsonString)
        {
            JsonDict = ToJsonDict(jsonString: jsonString);
        }

        public Order ToOrder()
        {
            var order = new Order()
            {
                SourceCity = JsonDict["SourceCity"],
                SourceAddress = JsonDict["SourceAddress"],
                DistCity = JsonDict["DistCity"],
                DistAddress = JsonDict["DistAddress"],
                Weight = int.Parse(JsonDict["Weight"]),
                Date = DateTime.Parse(JsonDict["Date"])
            };
            return order;
        }

        public static List<OrderWithStringTime> ToNewOrderList(List<Order> orderList)
        {
            var newOrderList = new List<OrderWithStringTime>();
            foreach (var order in orderList)
            {
                newOrderList.Add(new OrderWithStringTime(order));
            }
            return newOrderList;
        }

        private protected static string ToJsonString(JsonDocument? json)
        {
            if (json is null) { throw new ArgumentNullException(nameof(json), "Json must be non null"); }
            using var stream = new MemoryStream();
            Utf8JsonWriter writer = new(stream, new JsonWriterOptions { Indented = true });
            json.WriteTo(writer);
            writer.Flush();
            return Encoding.UTF8.GetString(stream.ToArray());
        }

        private protected static Dictionary<string, string> ToJsonDict(JsonDocument? json = null, string? jsonString = null)
        {
            var jsonDict = jsonString is null ? JsonConvert.DeserializeObject<Dictionary<string, string>>(ToJsonString(json)) :
                 JsonConvert.DeserializeObject<Dictionary<string, string>>(jsonString);
            if (jsonDict is null) { throw new ArgumentNullException(nameof(jsonDict), "Json Dict must be non null"); }
            return jsonDict;
        }
    }
}
