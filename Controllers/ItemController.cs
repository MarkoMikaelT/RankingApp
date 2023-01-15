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

            new ItemModel{Id = 10, Title = "", ImageId = 10, Rank = 0, ItemType = 1},
            new ItemModel{Id = 11, Title = "", ImageId = 11, Rank = 0, ItemType = 1},
            new ItemModel{Id = 12, Title = "", ImageId = 12, Rank = 0, ItemType = 1},
            new ItemModel{Id = 13, Title = "", ImageId = 13, Rank = 0, ItemType = 1},
            new ItemModel{Id = 14, Title = "", ImageId = 14, Rank = 0, ItemType = 1},
            new ItemModel{Id = 15, Title = "", ImageId = 15, Rank = 0, ItemType = 1},
            new ItemModel{Id = 16, Title = "", ImageId = 16, Rank = 0, ItemType = 1},
            new ItemModel{Id = 17, Title = "", ImageId = 17, Rank = 0, ItemType = 1},
            new ItemModel{Id = 18, Title = "", ImageId = 18, Rank = 0, ItemType = 1},
            new ItemModel{Id = 19, Title = "", ImageId = 19, Rank = 0, ItemType = 1},
        };

        [HttpGet("{itemtype:int}")]
        public ItemModel[] GetItems(int itemtype)
        {
            ItemModel[] items = Items.Where(i => i.ItemType == itemtype).ToArray();
            return items;
        }
    }
}
