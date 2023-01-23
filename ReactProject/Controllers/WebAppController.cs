using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using ReactProject.Models;
using DataBaseLib.PostgreSQLProcessing;
using DataBaseLib.Entyties;
using DataBaseLib;

namespace ReactProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebAppController : ControllerBase
    {
        private static readonly Repository<Order> repositoryOrder;
        static WebAppController()
        {
            var eFDBContext= new EFDBContext();
            repositoryOrder = new Repository<Order>(eFDBContext);
        }


        [HttpGet("GetAllOrders")]
        public async Task<IActionResult> GetAllOrdersAsync() => Ok(Converter.ToNewOrderList(await repositoryOrder.GetAsync()));

        [HttpGet("GetOrder")]
        public async Task<IActionResult> GetOrderAsync(int id) => Ok(Converter.ToNewOrderList(await repositoryOrder.GetAsync(id: id)));

        [HttpPost("AddOrder")]
        public async Task<IActionResult> AddOrderAsync(JsonDocument jsonDocument)
        {
            await repositoryOrder.AddAsync(new Converter(jsonDocument).ToOrder());
            return Ok();
        }


    }
}
