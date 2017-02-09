<template>
    <section class="card-list">
        <article v-for="item in storiesDetail"  v-bind:class="{'card-item': true, 'no-img':typeof item.images == 'undefined'}">
            <router-link :to="{ name: 'news', params: { id: item.id }}">
                <div v-if="typeof item.images == 'undefined'">
                    <p class="card-title">{{item.title}}</p>
                </div>
                <div v-else>
                    <div class="card-preview" v-bind="getImg(item.images)" :style="{backgroundImage: 'url('+ item.images +')'}"></div>
                    <p class="card-title">{{item.title}}</p>
                </div> 
            </router-link>
            
        </article>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                id: '',
                storiesDetail: []
            }
        },
        created: function () {
          this.fillthemescont()
        },
        methods: {
		  getImg: function (src) {
			var body = document.querySelector("body");
			var iframe = document.createElement("iframe");
			var html = '<img src="'+ src +'"/>';
			iframe.src = "javascript:void(function(){document.open();document.write('"+ html +"');document.close();}())";
			iframe.style.position="fixed";
			iframe.style.width="100%";
			iframe.style.height="100%";
			iframe.style.border=0;
			iframe.style.zIndex=10;
			iframe.style.top='-1000px';
			iframe.style.left=0;
			body.appendChild(iframe);
			setTimeout(function () {
				body.removeChild(iframe);
			},200)
			},
          fillthemescont: function () {
            this.$http.get('api/4/theme/' + this.$route.params.id, {}, {
              headers: {
              'X-Requested-With': 'XMLHttpRequest'
            },
            emulateJSON: true
            }).then(function (respones) {
              this.storiesDetail = respones.data.stories
            },function (respones) {
              console.log(respones)
            })
          }
        }
    }

</script>

<style>
    .card-item {
	display:inline-block;
	position:relative;
	box-sizing:border-box;
	background-color:#fff;
	width:18.5rem;
	padding:14rem 1rem 1rem;
	margin:.5rem;
	text-align:left;
	vertical-align:text-top;
	min-height:21rem
}
.card-preview {
	position:absolute;
	height:14rem;
	width:100%;
	top:0;
	left:0;
	background-size:cover
}
.card-title {
	font-size:1.6rem;
	padding:.5rem 0;
	margin:0;
	line-height:1.6
}
.card-description {
	text-align:left;
	font-size:1rem;
	line-height:1.6
}
.card-item.no-img,.card-list .card-item.no-img {
	padding:1rem
}
.card-list .card-item.no-img .card-title {
	height:inherit
}
.card-list .card-item.no-img .card-preview {
	display:none
}
@media all and (max-width:768px) {
	.card-item {
		width:100%;
		margin:1rem 0;
		min-height:inherit
	}
	.card-list .card-item {
		width:100%;
		padding:1rem 1rem 1rem 9rem;
		height:7rem;
		overflow:hidden
	}
	.card-list .card-preview {
		left:0;
		right:inherit;
		width:7rem;
		height:7rem
	}
}

</style>