using System.Text.Json.Serialization;

namespace WebApplication1.Domain
{
    public class Autor
    {
        public int Id { get; set; }
        public string Pensamento { get; set; }
        public string AutorNome { get; set; }
        public int Modelo { get; set; }
    }
}
