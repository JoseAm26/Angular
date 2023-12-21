const skills: string[] = ['tiro', 'ritmo', 'defensa'];

interface Character{
    ritmo: number;
    posicion: string;
    skills: string[]; 
    equipo?: string;
}

const stats: Character = {
    ritmo: 99,
    posicion: 'Delantero',
    skills: ['tiro', 'defensa']
}

stats.equipo = 'RMA';

console.table(stats);

export{};