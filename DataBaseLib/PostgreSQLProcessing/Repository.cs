using Microsoft.EntityFrameworkCore;
using System.Data;

namespace DataBaseLib.PostgreSQLProcessing
{
    public class Repository<T>
    {
        private readonly EFDBContext _eFDBContext;

        public Repository(EFDBContext eFDBContext)
        {
            _eFDBContext = eFDBContext;
        }


        public async Task<List<T>> GetAsync(int id = 0)
        {
            var result = new List<T>();
            if (typeof(T).Name == "Order")
            {
                var orders = id == 0 ? await _eFDBContext.Orders.OrderByDescending(order => order.Id).ToListAsync() :
                    await _eFDBContext.Orders.Where(order => order.Id == id).ToListAsync();
                foreach (object o in orders)
                {
                    result.Add((T)o);
                }
            }
            // для каждого нового класса нужен свой блок


            return result;
        }

        public async Task AddAsync(T entry)
        {
            if (entry is null) { throw new ArgumentNullException(nameof(entry), $"{entry} must be non null"); }
            _eFDBContext.Add(entry);
            await _eFDBContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entry)
        {
            if (entry is null) { throw new ArgumentNullException(nameof(entry), $"{entry} must be non null"); }
            _eFDBContext.Update(entry);
            await _eFDBContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(T entry)
        {
            if (entry is null) { throw new ArgumentNullException(nameof(entry), $"{entry} must be non null"); }
            _eFDBContext.Remove(entry);
            await _eFDBContext.SaveChangesAsync();
        }
    }
}
