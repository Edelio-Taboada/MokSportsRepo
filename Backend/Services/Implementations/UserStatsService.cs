using MokSportsApp.Data.Repositories.Interfaces;
using MokSportsApp.Models;
using MokSportsApp.DTO;
using MokSportsApp.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MokSportsApp.Services.Implementations
{
    public class UserStatsService : IUserStatsService
    {
        private readonly IUserStatsRepository _userStatsRepository;

        public UserStatsService(IUserStatsRepository userStatsRepository)
        {
            _userStatsRepository = userStatsRepository;
        }

        public async Task<IEnumerable<UserStats>> GetUserStatsByUserAndLeagueAsync(int userId, int leagueId)
        {
            return await _userStatsRepository.GetUserStatsByUserAndLeagueAsync(userId, leagueId);
        }

        public async Task<UserStats> GetUserStatsByIdAsync(int id)
        {
            return await _userStatsRepository.GetUserStatsByIdAsync(id);
        }

        public async Task<IEnumerable<UserStats>> GetUserStatsByUserLeagueAndWeekAsync(int userId, int leagueId, int weekId)
        {
            return await _userStatsRepository.GetUserStatsByUserAndLeagueAndWeekAsync(userId, leagueId, weekId);
        }

        public async Task AddOrUpdateUserStatsAsync(UserStats userStats)
        {
            await _userStatsRepository.AddOrUpdateUserStatsAsync(userStats);
        }

        public async Task UpdateUserStatsAsync(UserStats userStats)
        {
            await _userStatsRepository.UpdateUserStatsAsync(userStats);
        }

        public async Task DeleteUserStatsAsync(int id)
        {
            await _userStatsRepository.DeleteUserStatsAsync(id);
        }
        public async Task<RemainingLoksDTO> GetRemainingLoksByFranchiseAsync(int franchiseId)
        {
            return await _userStatsRepository.GetRemainingLoksByFranchiseAsync(franchiseId);
        }
    }
}
