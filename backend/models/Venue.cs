namespace VenueAPI.Models
{
    public class Venue
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Location { get; set; }

        public int Capacity { get; set; }

        public decimal Price { get; set; }
    }
}