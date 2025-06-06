using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MokSportsApp.Models
{
    [Table("UserLeagues")]
    public class UserLeague
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; } // Foreign key referencing the User

        public int LeagueId { get; set; } // Foreign key referencing the League

        [ForeignKey("UserId")]
        public User User { get; set; } = null!; // Navigation property to the User entity

        [ForeignKey("LeagueId")]
        public League League { get; set; } = null!; // Navigation property to the League entity
    }
}
