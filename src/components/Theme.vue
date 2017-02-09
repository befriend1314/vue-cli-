<template>
    <div class="list-container">
        <article class="card-item" v-for="item in themeothers">
            <router-link :to="{ name: 'themelist', params: { id: item.id }}">
                <div class="card-preview" v-bind="getImg(item.thumbnail)" v-bind:style="{backgroundImage: 'url('+ item.thumbnail +')'}"></div>
                <p class="card-title">{{item.name}}</p>
                <p class="card-description">{{item.description}}</p>
            </router-link>
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                themeothers: []
            }
        },
        created: function () {
            this.fetchThemeList()
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
            fetchThemeList: function () {
                this.$http.get('api/4/themes', {}, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    emulateJSON: true
                }).then(function (response) {
                    this.themeothers = response.data.others
                }, function (response) {
                    console.log(response)
                })
            }
        }
    }

</script>

<style>
    .card-item {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: #fff;
        width: 18.5rem;
        padding: 14rem 1rem 1rem;
        margin: .5rem;
        text-align: left;
        vertical-align: text-top;
        min-height: 21rem
    }
    .card-item a{
        text-decoration: none;
        color: #000;
    }
    
    .card-preview {
        position: absolute;
        height: 14rem;
        width: 100%;
        top: 0;
        left: 0;
        background-size: cover
    }
    
    .card-title {
        font-size: 1.6rem;
        padding: .5rem 0;
        margin: 0;
        line-height: 1.6
    }
    
    .card-description {
        text-align: left;
        font-size: 1rem;
        line-height: 1.6
    }
    
    .card-item.no-img,
    .card-list .card-item.no-img {
        padding: 1rem
    }
    
    .card-list .card-item.no-img .card-title {
        height: inherit
    }
    
    .card-list .card-item.no-img .card-preview {
        display: none
    }
    
    @media all and (max-width:768px) {
        .card-item {
            width: 100%;
            margin: 1rem 0;
            min-height: inherit
        }
        .card-list .card-item {
            width: 100%;
            padding: 1rem 1rem 1rem 9rem;
            height: 7rem;
            overflow: hidden
        }
        .card-list .card-preview {
            left: 0;
            right: inherit;
            width: 7rem;
            height: 7rem
        }
    }
</style>