using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id = 0, Title = "", ImageId = 0, Rank = 0, ItemType = 0},
            new ItemModel{Id = 1, Title = "", ImageId = 1, Rank = 0, ItemType = 0},
            new ItemModel{Id = 2, Title = "", ImageId = 2, Rank = 0, ItemType = 0},
            new ItemModel{Id = 3, Title = "", ImageId = 3, Rank = 0, ItemType = 0},
            new ItemModel{Id = 4, Title = "", ImageId = 4, Rank = 0, ItemType = 0},
            new ItemModel{Id = 5, Title = "", ImageId = 5, Rank = 0, ItemType = 0},
            new ItemModel{Id = 6, Title = "", ImageId = 6, Rank = 0, ItemType = 0},
            new ItemModel{Id = 7, Title = "", ImageId = 7, Rank = 0, ItemType = 0},
            new ItemModel{Id = 8, Title = "", ImageId = 8, Rank = 0, ItemType = 0},
            new ItemModel{Id = 9, Title = "Shrek2", ImageId = 9, Rank = 1, ItemType = 0},
        };

        [HttpGet("{itemtype:int}")]
        public ItemModel[] GetItems(int itemtype)
        {
            ItemModel[] items = Items.Where(i => i.ItemType == itemtype).ToArray();
            return items;
        }
    }
}
