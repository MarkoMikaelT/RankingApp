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
            new ItemModel{Id = 0, Title = "The Godfather", ImageId = 0, Rank = 0, ItemType = 0},
            new ItemModel{Id = 1, Title = "The Godfather", ImageId = 1, Rank = 0, ItemType = 0},
            new ItemModel{Id = 2, Title = "The Godfather", ImageId = 2, Rank = 0, ItemType = 0},
            new ItemModel{Id = 3, Title = "The Godfather", ImageId = 3, Rank = 0, ItemType = 0},
            new ItemModel{Id = 4, Title = "The Godfather", ImageId = 4, Rank = 0, ItemType = 0},
            new ItemModel{Id = 5, Title = "The Godfather", ImageId = 5, Rank = 0, ItemType = 0},
            new ItemModel{Id = 6, Title = "The Godfather", ImageId = 6, Rank = 0, ItemType = 0},
            new ItemModel{Id = 7, Title = "The Godfather", ImageId = 7, Rank = 0, ItemType = 0},
            new ItemModel{Id = 8, Title = "The Godfather", ImageId = 8, Rank = 0, ItemType = 0},
            new ItemModel{Id = 9, Title = "The Godfather", ImageId = 9, Rank = 0, ItemType = 0},
            new ItemModel{Id = 10, Title = "The Godfather", ImageId = 10, Rank = 0, ItemType = 0}
        };

        [HttpGet("{itemtype:int}")]
        public ItemModel[] GetItems(int itemtype)
        {
            ItemModel[] items = Items.Where(i => i.ItemType == itemtype).ToArray();
            return items;
        }
    }
}
