using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Domain;
using WebApplication1.Dto;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AutoresController : ControllerBase
{
    private readonly IAutorService _autorService;
    private readonly IMapper _mapper;

    public AutoresController(IAutorService autorService, IMapper mapper)
    {
        _autorService = autorService;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> GetAutores()
    {
        try
        {
            var autores = await _autorService.BuscarTodosAutores();
            return Ok(autores);
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }

    [HttpPost]
    public async Task<IActionResult> PostAutor([FromBody] CreateAutorDto autorDto)
    {
        try
        {
            var autor = _mapper.Map<Autor>(autorDto);
            var result = await _autorService.InserirAutor(autor);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutAutor(int id, [FromBody] CreateAutorDto autorDto)
    {
        try
        {
            var autor = _mapper.Map<Autor>(autorDto);
            var result = await _autorService.AtualizarAutores(autor);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAutor(int id)
    {
        try
        {
            var result = await _autorService.DeletarAutor(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }
        catch (Exception)
        {
            return BadRequest();
        }
    }
}
