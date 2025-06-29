using MokSportsApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MokSportsApp.Services.Interfaces
{
    public interface IFranchiseService
    {
        Task<Franchise> GetFranchiseByIdAsync(int id);
        Task<Franchise> GetFranchiseByUserAndLeagueAsync(int userId, int leagueId);
        Task<List<Franchise>> GetFranchisesByUserAsync(int userId);
        Task<List<Franchise>> GetFranchisesByLeagueAsync(int leagueId);
        Task<Franchise> CreateFranchiseAsync(Franchise franchise);
        Task<Franchise> UpdateFranchiseAsync(int id, Franchise updatedFranchise);
        Task<bool> DeleteFranchiseAsync(int id);
        Task<int?> GetTotalSkinsWonAsync(int franchiseId);
        Task<bool> IsTeamLokedAsync(int franchiseId, int teamId);
    }
}
