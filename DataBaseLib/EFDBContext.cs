using DataBaseLib.Entyties;
using Microsoft.EntityFrameworkCore;

namespace DataBaseLib
{
    public class EFDBContext : DbContext
    {
        public DbSet<Order> Orders { get; set; } = null!;

        public EFDBContext() => Database.EnsureCreated();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string host = "localhost";
            string port = "5432";
            string dataBase = "WebAppDB";
            string username = "postgres";
            string password = "qwe123@";
            optionsBuilder.UseNpgsql($"Host={host};Port={port};Database={dataBase};Username={username};Password={password}");
        }
    }
}
