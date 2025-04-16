using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Dto
{
    public class CreateAutorDto
    {
        [Required(ErrorMessage = "O campo pensamento é obrigatório.")]
        [MaxLength(300, ErrorMessage = "O campo não pode ultrapassar 300 caracteres.")]
        public string Pensamento { get; set; }

        [Required(ErrorMessage = "O campo AutorNome é obrigatório.")]
        [MaxLength(50, ErrorMessage = "O campo não pode ultrapassar 50 caracteres.")]
        public string AutorNome { get; set; }
        [Required(ErrorMessage = "O campo Modelo é obrigatório.")]
        public int Modelo { get; set; }
    }
}
