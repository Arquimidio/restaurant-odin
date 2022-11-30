const MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96713.72354927515!2d-74.04583233613495!3d40.75534106857023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ef29cfbb5d%3A0xb6d8212cacc082ae!2sLe%20Botaniste!5e0!3m2!1spt-BR!2sbr!4v1669800839166!5m2!1spt-BR!2sbr"

export default (width = 450, height = 600) => ({
    type: 'iframe',
    attr: {
        src: MAP_URL,
        width,
        height,
        loading: "lazy",
        referrerpolicy: "no-referrer-when-downgrade"
    }
})