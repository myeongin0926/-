function solution(park, routes) {  
    const location = {}
    
    park.forEach((el,idx) => {
        const index = el.indexOf('S')
        if(index !== -1) {
            location.x = index
            location.y = idx
        }
    })
    
    for(let i = 0; i < routes.length; i++) {
        const [dir, dis] = routes[i].split(' ')
        let { y , x } = location  
        let tryX = dir === 'E' ? +dis : dir === 'W' ? -dis : null
        let tryY = dir === 'S' ? +dis : dir === 'N' ? -dis : null
        
        if(tryX) {
           const locX = x + tryX
           if(!(park[y][locX])) continue;
           if(x < locX && park[y].slice(x, locX + 1).includes('X')) continue;
           if(x > locX && park[y].slice(locX, x + 1).includes('X')) continue;
           location.x = locX
        }
        if(tryY) {
           const locY = y + tryY
           const yMap = park.map(el => el[x])
           if(!(park[locY])) continue;
           if(y < locY && yMap.slice(y, locY + 1).includes('X')) continue
           if(y > locY && yMap.slice(locY, y + 1).includes('X')) continue
           location.y = locY
        }
    }
    
    return [location.y, location.x];
}