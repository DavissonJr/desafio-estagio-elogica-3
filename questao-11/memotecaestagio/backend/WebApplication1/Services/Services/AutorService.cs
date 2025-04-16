using WebApplication1.Domain;
using WebApplication1.Infra.Interfaces;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Services.Services;

public class AutorService : IAutorService
{
    private readonly IAutorRepository _autorRepository;
    public AutorService(IAutorRepository autorRepository)
    {
        _autorRepository = autorRepository;
    }
    public Task<bool> AtualizarAutores(Autor autor)
    {
        try
        {
            return _autorRepository.AtualizarAutores(autor);
        }
        catch (Exception)
        {
            throw;
        }
    }
    public Task<Autor> BuscaAutorPorId(int id)
    {
        try
        {
            return _autorRepository.BuscaAutorPorId(id);
        }
        catch (Exception)
        {
            throw;
        }
    }

    public Task<List<Autor>> BuscarTodosAutores()
    {
        try
        {
            return _autorRepository.BuscarTodosAutores();
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<bool> DeletarAutor(int id)
    {
        try
        {
        return await _autorRepository.DeletarAutor(id);
        }
        catch(Exception)
        {
            throw;
        }
    }

    public Task<bool> InserirAutor(Autor autor)
    {
        try
        {
        return _autorRepository.InserirAutor(autor);
        }
        catch (Exception)
        {
            throw;
        }
    }
}
