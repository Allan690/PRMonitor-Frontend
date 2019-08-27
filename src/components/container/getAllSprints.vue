<script>
import getAllSprintsMutation from "@/mutations/getSprints";

export default  {
    name: 'getAllSprints',
    methods: {
        async getAllSprints() {
            this.loadingData = true;
            const response = await this.$apollo.mutate({
                mutation: getAllSprintsMutation,
                variables: {
                    boardId: this.boardId
                }
            });
            this.loadingData =false;
            const { data: { getAllSprints: { Sprints } }} = response;
            return Sprints;
        }
    },
    data() {
        return {
            loadingData: false, boardId: 8, allSprints: []
        }
    },

    async mounted() {
        try {
            this.allSprints = await this.getAllSprints();
        }
        catch(err) {
            // console.log(err)
        }
    }
}
</script>
