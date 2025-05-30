using MokSportsApp.DTO;
using MokSportsApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MokSportsApp.Data.Repositories.Interfaces
{
    public interface IGameRepository
    {
        Task<Game?> GetGameByIdAsync(int id);
        Task<IEnumerable<Game>> GetAllGamesAsync();
        Task<IEnumerable<Game>> GetGamesByDateAsync(DateTime date);
        Task<IEnumerable<Game>> GetGamesByTeamAsync(string teamName);
        Task<List<Game>> GetByWeekAsync(int week);
        Task AddGameAsync(Game game);
        Task SaveChangesAsync();
        Task<List<MatchListDTO>> GetMatchListForLOK();
        Task<List<KeyValuePair<int, string>>> GetDeviceToken(MatchListDTO input);
        Task<KeyValuePair<Week, List<StandingNotificationDTO>>> GetWeeklyStandingNotification();
        Task SendWeeklyTopPerformingPlayerAlerts();
        Task SendWeeklyTeamUpdates();
        Task<List<GameFranchiseDTO>> GetGamesWithFranchiseByWeekAsync(int week);
    }
}
