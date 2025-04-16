using WebApplication1.Domain;

namespace WebApplication1.Services.Interfaces;

public interface IAutorService
{
    Task<Autor> BuscaAutorPorId(int id);
    Task<List<Autor>> BuscarTodosAutores();
    Task<bool> InserirAutor(Autor autor);
    Task<bool> AtualizarAutores(Autor autor);
    Task<bool> DeletarAutor(int id);
}
