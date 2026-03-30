using Microsoft.AspNetCore.Mvc;
using VenueAPI.Models;

namespace VenueAPI.Controllers
{
    [ApiController]
    [Route("dotnetApi/[controller]")]
    public class VenueController : ControllerBase
    {
        static List<Venue> venues = new List<Venue>();

        // GET
        [HttpGet]
        public IActionResult GetVenues()
        {
            return Ok(venues);
        }

        // POST (Admin only concept)
        [HttpPost]
        public IActionResult AddVenue(Venue venue)
        {
            venue.Id = venues.Count + 1;
            venues.Add(venue);
            return Ok(venue);
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteVenue(int id)
        {
            var venue = venues.FirstOrDefault(v => v.Id == id);
            if (venue == null) return NotFound();

            venues.Remove(venue);
            return Ok();
        }
    }
}