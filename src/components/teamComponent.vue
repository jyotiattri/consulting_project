<template>
    <div class="team-area section-padding30">
        <div class="container">
            <div class="row">
                <div class="cl-xl-7 col-lg-8 col-md-10">
                    <!-- Section Tittle -->
                    <div class="section-tittle mb-70">
                        <span>Our Professional members </span>
                        <h2>Our Team Members</h2>
                    </div> 
                </div>
            </div>
            <div class="row">
                <!-- single Tem -->
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-" v-for="member in members"
                :key="member.membername">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img :src="member.memberimage" alt="">
                        </div>
                        <div class="team-caption">
                            <h3><a href="#">{{member.membername}}</a></h3>
                            <span>{{member.memberdetails}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     name: "teamComponent",
    data() {
        return {
            members:[
                {
                    memberimage: 'assets/img/gallery/team1.png',
                    membername: 'Robert',
                    memberdetails: 'UX Designer'
                },
                {
                    memberimage: 'assets/img/gallery/team2.png',
                    membername: 'Charles',
                    memberdetails: 'Frontend Developer'
                },
                {
                    memberimage: 'assets/img/gallery/team3.png',
                    membername: 'Harry',
                    memberdetails: 'Marketing Head'
                },
            ],
           
        }
    }
}
</script>