<script>
    import Header from '../components/Header.svelte'
    import Footer from '../components/Footer.svelte'
    import {data} from "../data/data.js"
    import {onMount} from 'svelte';

    export let params;
    let data2;
    
    function getCharity(id){
      return data.find(function(charity){
        return charity.id === parseInt(id);
      })
    }

    onMount(()=>{
      data2 = getCharity(params.id);
    })
    
</script>
<Header />
<!-- welcome section -->
    <!--breadcumb start here-->
    
      <section class="xs-banner-inner-section parallax-window" style=
      "background-image:url('assets/images/background/about.png')">
        <div class="xs-black-overlay"></div>
        <div class="container">
          <div class="color-white xs-inner-banner-content">
            <h2>{data2.title}</h2>
            <p>Give a helping hand for poor people</p>
            <ul class="xs-breadcumb">
              <li class="badge badge-pill badge-primary">
                <a href="/" class="color-white">Home /</a> Donate
              </li>
            </ul>
          </div>
        </div>
      </section><!--breadcumb end here--><!-- End welcome section -->
      <main class="xs-main">
        {#if data}
        <!-- donation form section -->
        <section class="xs-section-padding bg-gray">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="xs-donation-form-images"><img src=
                {data2.thumbnail} class="img-responsive" alt=
                "Family Images"></div>
              </div>
              <div class="col-lg-6">
                <div class="xs-donation-form-wraper">
                  <div class="xs-heading xs-mb-30">
                    <h2 class="xs-title">{data2.title}</h2>
                    <p class="small">To learn more about make donate charity
                      with us visit our "<span class="color-green">Contact
                        us</span>" site. By calling <span class=
                        "color-green">+44(0) 800 883 8450</span>.</p><span class=
                        "xs-separetor v2"></span>
                  </div><!-- .xs-heading end -->
                  <form action="#" method="post" id="xs-donation-form" class=
                  "xs-donation-form" name="xs-donation-form">
                    <div class="xs-input-group">
                      <label for="xs-donate-name">Donation Amount <span class=
                      "color-light-red">**</span></label> <input type="text"
                                                                name="name" id="xs-donate-name" class="form-control"
                                                                                                placeholder="Minimum of $5">
                    </div><!-- .xs-input-group END -->
                    <div class="xs-input-group">
                      <label for="xs-donate-name">Nama <span class=
                      "color-light-red">**</span></label> <input type="text"
                                                                name="name" id="xs-donate-name" class="form-control"
                                                                                                placeholder="Minimum of $5">
                    </div><!-- .xs-input-group END -->
                    <div class="xs-input-group">
                      <label for="xs-donate-charity">List of Evaluated Charities
                        <span class="color-light-red">**</span></label>
                      <select name="charity-name" id="xs-donate-charity" class=
                      "form-control">
                        <option value="">
                        Select
                        </option>
                        <option value="amarokSocity">
                        Amarok socity
                        </option>
                        <option value="amarokSocity">
                        Amarok socity
                        </option>
                        <option value="amarokSocity">
                        Amarok socity
                        </option>
                        <option value="amarokSocity">
                        Amarok socity
                        </option>
                      </select>
                    </div><!-- .xs-input-group END -->
                    <div class="xs-input-group" id="xs-input-group-checkbox">
                      <input type="checkbox" id="xs-donate-angree">
                      <label for="xs-donate-angree">Agree</label>
                    </div>
                    <button type="submit" class="btn btn-warning"><span class=
                    "badge"><i class="fa fa-heart"></i></span> Donate
                  now</button>
                  </form><!-- .xs-donation-form #xs-donation-form END -->
                </div>
              </div>
            </div><!-- .row end -->
          </div><!-- .container end -->
        </section><!-- End donation form section -->
       {/if}
    </main><!-- footer section start -->
  <Footer />
  <style>
    #xs-input-group-checkbox{
      display: flex;
      align-items: center;
    }
    #xs-donate-angree{
      width: 35px;
    }
    label[for='xs-donate-angree']{
      margin: 0;
      margin-left: 10px;
    }
    .xs-donation-form-images{
      text-align: center;
    }
  </style>