using AutoMapper;
using WebApplication1.Domain;
using WebApplication1.Dto;

public class ConfigProfile : Profile
{
    public ConfigProfile()
    {
        CreateMap<CreateAutorDto, Autor>().ReverseMap();
    }
}