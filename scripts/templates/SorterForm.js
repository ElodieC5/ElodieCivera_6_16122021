class SorterForm {
    constructor(Medias) {
        this.Medias = Medias

        this.$wrapper = document.createElement('div')
        this.$sorterFormWrapper = document.querySelector('.sorter-form-wrapper')
        this.$mediasWrapper = document.querySelector('.medias-wrapper')

        this.ProxyRatingSorter = new ProxyRatingSorter()
    }

    async sorterMedias(sorter) {
        this.clearMediasWrapper()

        if (!!sorter) {
            // Vous pourrez supprimer cette ligne
            // const sortedData = await RatingSorterApi.sorter(this.Medias, sorter)

            const sortedData = await this.ProxyRatingSorter.sorter(this.Medias, sorter)


            const SortedMedias = sortedData.data 

            SortedMediass.forEach(Media => {
                const Template = new MediaCard(Media)
                this.$mediasWrapper.appendChild(Template.createMediaCard())
            })
        } else {
            this.Medias.forEach(Media => {
                const Template = new MediaCard(Media)
                this.$mediasWrapper.appendChild(Template.createMediaCard())
            })
        }
    }

    onChangeSorter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const sorter = e.target.value
                this.sorterMedias(sorter)
            })
    }

    clearMediasWrapper() {
        this.$mediasWrapper.innerHTML = ""
    }

    render() {
        const sorterForm = `
            <form action="#" method="POST" class="sorter-form">
                <label for="sorter-select">Triez par date de sortie : </label>
                <select name="sorter-select" id="sorter-select">
                    <option value="">Aucun tri</option>
                    <option value="ASC">Croissante</option>
                    <option value="DESC">Décroissante</option>
                </select>
            </form>
        `

        this.$wrapper.innerHTML = sorterForm
        this.onChangeSorter()

        this.$sorterFormWrapper.appendChild(this.$wrapper)
    }
}