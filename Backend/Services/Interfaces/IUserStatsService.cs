using MokSportsApp.Models;
using MokSportsApp.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MokSportsApp.Services.Interfaces
{
    public interface IUserStatsService
    {
        Task<IEnumerable<UserStats>> GetUserStatsByUserAndLeagueAsync(int userId, int leagueId);
        Task<UserStats> GetUserStatsByIdAsync(int id);
        Task<IEnumerable<UserStats>> GetUserStatsByUserLeagueAndWeekAsync(int userId, int leagueId, int weekId);
        Task AddOrUpdateUserStatsAsync(UserStats userStats);
        Task UpdateUserStatsAsync(UserStats userStats);
        Task DeleteUserStatsAsync(int id);
        Task<RemainingLoksDTO> GetRemainingLoksByFranchiseAsync(int franchiseId);
    }
}
