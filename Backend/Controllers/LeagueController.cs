using Microsoft.AspNetCore.Mvc;
using MokSportsApp.DTO;
using MokSportsApp.Models;
using MokSportsApp.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MokSportsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeagueController : ControllerBase
    {
        private readonly ILeagueService _leagueService;
        private readonly IUserLeagueService _userLeagueService;

        public LeagueController(ILeagueService leagueService, IUserLeagueService userLeagueService)
        {
            _leagueService = leagueService;
            _userLeagueService = userLeagueService;
        }

        // POST: api/league/create
        [HttpPost("create")]
        public async Task<ActionResult<League>> CreateLeague([FromBody] LeagueDTO league, [FromQuery] int userId)
        {
            try
            {
                if (!await _leagueService.IsSeasonAvailable(league.SeasonId)) return NotFound("Season not found");

                var _league = new League()
                {
                    SeasonId = league.SeasonId,
                    Pin = league.Pin
                };

                var createdLeague = await _leagueService.CreateLeagueAsync(_league, userId);
                return CreatedAtAction(nameof(GetLeagueById), new { id = createdLeague.LeagueId }, createdLeague);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET: api/league/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<League>> GetLeagueById(int id)
        {
            var league = await _leagueService.GetLeagueByIdAsync(id);
            if (league == null)
            {
                return NotFound(new { message = "League not found." });
            }
            return Ok(league);
        }

        // GET: api/league/{id}/users
        [HttpGet("{id}/users")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsersInLeague(int id)
        {
            var users = await _userLeagueService.GetUsersInLeagueAsync(id);
            if (users == null || users.Count == 0)
            {
                return NotFound(new { message = "No users found in the league." });
            }
            return Ok(users);
        }

        // POST: api/league/join
        [HttpPost("join")]
        public async Task<ActionResult> JoinLeague([FromQuery] int userId, [FromBody] JoinLeagueRequest request)
        {
            try
            {
                await _leagueService.JoinLeagueAsync(userId, request.Pin);
                return Ok(new { message = "Successfully joined the league." });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
        }


        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<League>>> GetLeaguesForUser(int userId)
        {
            var leagues = await _userLeagueService.GetLeaguesForUserAsync(userId);
            if (leagues == null || leagues.Count == 0)
            {
                return NotFound(new { message = "No leagues found for this user." });
            }
            return Ok(leagues);
        }

        // POST: api/league/roll-over-skin
        [HttpPost("roll-over-skin")]
        public async Task<IActionResult> RollOverSkin([FromQuery] int nextWeekId, [FromQuery] int leagueId)
        {
            
            try
            {
                await _leagueService.RollOverSkinAsync(leagueId, nextWeekId);
                return Ok(new { message = "Skins rolled over successfully." });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch
            {
                return StatusCode(500, new { message = "An error occurred while rolling over skins." });
            }
        }

    }

    // DTO for joining a league
    public class JoinLeagueRequest
    {
        public string Pin { get; set; }
    }
}