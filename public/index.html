<!DOCTYPE html>
<html>
<head>
    <title>Plano de Oficina IT</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <style>#map { height: 90vh; width: 100%; cursor: crosshair; }</style>
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script>
        const map = L.map('map', { crs: L.CRS.Simple, minZoom: -1 });
        const bounds = [[0, 0], [1000, 1500]]; // Ajusta al tamaño de tu imagen
        L.imageOverlay('TU_IMAGEN_AQUI.jpg', bounds).addTo(map);
        map.fitBounds(bounds);

        // Cargar puntos existentes al abrir
        fetch('/api/pcs')
            .then(res => res.json())
            .then(data => {
                data.forEach(pc => {
                    L.marker([pc.coord_y, pc.coord_x]).addTo(map)
                     .bindPopup(`<b>${pc.nombre}</b>`);
                });
            });

        // Click para guardar nueva PC
        map.on('click', function(e) {
            const nombre = prompt("Nombre del equipo/usuario:");
            if (!nombre) return;

            const datos = { nombre, x: e.latlng.lng, y: e.latlng.lat };

            fetch('/api/pcs', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(datos)
            }).then(() => {
                L.marker([datos.y, datos.x]).addTo(map).bindPopup(nombre);
            });
        });
    </script>
</body>
</html>
