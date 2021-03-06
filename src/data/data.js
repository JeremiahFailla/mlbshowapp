const names = [
  {
    id: 205,
    team: "Orioles",
    name: "John Means",
    number: 47,
    position: "SP",
    overall: 83,
    bats: "L",
    throws: "L",
    secondary: "",
    weight: 235,
    height: "6'3\"",
    age: 27,
    born: "Kansas",
    conR: 6,
    conL: 3,
    pwrR: 0,
    pwrL: 0,
    vis: 2,
    disc: 8,
    clu: 3,
    dur: 74,
    fld: 48,
    armStr: 56,
    armAcc: 38,
    reac: 39,
    spd: 38,
    stl: 0,
    brAgg: 7,
    btn: 71,
    drgBtn: 62,
    sta: 83,
    hPerNine: 81,
    kPerNine: 56,
    wPerNine: 86,
    hrPerNine: 52,
    pClu: 90,
    ctrl: 65,
    vel: 73,
    brk: 98,
    rating: "gold",
  },
  {
    id: 200,
    team: "Orioles",
    name: "Tanner Scott",
    number: 47,
    position: "RP",
    overall: 76,
    bats: "L",
    throws: "L",
    secondary: "",
    weight: 235,
    height: "6'3\"",
    age: 27,
    born: "Kansas",
    conR: 6,
    conL: 3,
    pwrR: 0,
    pwrL: 0,
    vis: 2,
    disc: 8,
    clu: 3,
    dur: 74,
    fld: 48,
    armStr: 56,
    armAcc: 38,
    reac: 39,
    spd: 38,
    stl: 0,
    brAgg: 7,
    btn: 71,
    drgBtn: 62,
    sta: 83,
    hPerNine: 81,
    kPerNine: 56,
    wPerNine: 86,
    hrPerNine: 52,
    pClu: 90,
    ctrl: 65,
    vel: 73,
    brk: 98,
    rating: "silver",
  },
  {
    id: 0,
    name: "Austin Hays",
    number: 21,
    position: "CF",
    rating: "gold",
    overall: 81,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 84,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 5,
    name: "Centric Mullins",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 6,
    name: "Ryan Mountcastle",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 7,
    name: "Dj Stewart",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 8,
    name: "Anthony Santandar",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 9,
    name: "Trey Mancini",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 10,
    name: "Ryan Mckena",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 11,
    name: "Kyle Tucker",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 12,
    name: "Carlos Correa",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 35,
    name: "Aaron Judge",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 13,
    name: "Aaron Hicks",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 14,
    name: "Manny Machado",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 15,
    name: "Jordan Westburg",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 16,
    name: "Mike Trout",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 17,
    name: "Corey Seagar",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 18,
    name: "Kyle Seagar",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 19,
    name: "Max Kepler",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 20,
    name: "Jon Jay",
    number: 31,
    position: "CF",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
    btn: 71,
    drgBtn: 62,
    dur: 78,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
];

export default names;
