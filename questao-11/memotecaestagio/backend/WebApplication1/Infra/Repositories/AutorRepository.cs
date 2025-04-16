using System.Data;
using Dapper;
using WebApplication1.Domain;
using WebApplication1.Infra.Interfaces;

namespace WebApplication1.Infra.Repositories;

public class AutorRepository : IAutorRepository
{
    private readonly IDbConnection _connection;

    public AutorRepository(IDbConnection connection)
    {
        _connection = connection;
    }

    public async Task<Autor> BuscaAutorPorId(int id)
    {
        try
        {
            string sql = $"SELECT TOP 1 * FROM AUTORES WHERE ID={id}";
            var autores = await _connection.QueryFirstOrDefaultAsync<Autor>(sql);
            return autores;
        }
        catch (Exception) { throw; }
    }

    public async Task<List<Autor>> BuscarTodosAutores()
    {
        try
        {
            string sql = "SELECT * FROM AUTORES";
            var autores = await _connection.QueryAsync<Autor>(sql);
            return autores.ToList();
        }
        catch (Exception) { throw; }
    }

    public async Task<bool> InserirAutor(Autor autor)
    {
        try
        {
            string sql = "INSERT INTO AUTORES VALUES (@AUTORNOME, @PENSAMENTO, @MODELO)";
            var result = await _connection.ExecuteAsync(sql, new { AUTORNOME = autor.AutorNome, PENSAMENTO = autor.Pensamento, MODELO = autor.Modelo });
            return result > 0;
        }
        catch (Exception) { throw; }
    }

    public async Task<bool> AtualizarAutores(Autor autor)
    {
        try
        {
            string sql = "UPDATE AUTORES SET AUTORNOME=@AUTORNOME, PENSAMENTO=@PENSAMENTO, MODELO=@MODELO WHERE ID=@ID";
            var parametros = new
            {
                ID = autor.Id,
                AUTORNOME = autor.AutorNome,
                PENSAMENTO = autor.Pensamento,
                MODELO = autor.Modelo
            };
            var result = await _connection.ExecuteAsync(sql, parametros);
            return result > 0;
        }
        catch (Exception) { throw; }
    }

    public async Task<bool> DeletarAutor(int id)
    {
        try
        {
            string sql = "DELETE FROM AUTORES WHERE ID=@ID";
            var result = await _connection.ExecuteAsync(sql, new { ID = id });
            return result > 0;
        }
        catch (Exception) { throw; }
    }
}
