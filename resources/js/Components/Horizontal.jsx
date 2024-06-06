import React from "react";

export default function Horizontal() {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Sub Modulue/Menu</h4>
                    </div>
                    {/* end card header */}
                    <div className="card-body">
                        {/* Nav tabs */}
                        <ul
                            className="nav nav-pills nav-justified"
                            role="tablist"
                        >
                            <li className="nav-item waves-effect waves-light">
                                <a
                                    className="nav-link active"
                                    data-bs-toggle="tab"
                                    href="#home-1"
                                    role="tab"
                                >
                                    <span className="d-block d-sm-none">
                                        <i className="fas fa-home" />
                                    </span>
                                    <span className="d-none d-sm-block">
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#profile-1"
                                    role="tab"
                                >
                                    <span className="d-block d-sm-none">
                                        <i className="far fa-user" />
                                    </span>
                                    <span className="d-none d-sm-block">
                                        Profile
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#messages-1"
                                    role="tab"
                                >
                                    <span className="d-block d-sm-none">
                                        <i className="far fa-envelope" />
                                    </span>
                                    <span className="d-none d-sm-block">
                                        Messages
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item waves-effect waves-light">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#settings-1"
                                    role="tab"
                                >
                                    <span className="d-block d-sm-none">
                                        <i className="fas fa-cog" />
                                    </span>
                                    <span className="d-none d-sm-block">
                                        Settings
                                    </span>
                                </a>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content p-3 text-muted">
                            <div
                                className="tab-pane active"
                                id="home-1"
                                role="tabpanel"
                            >
                                <p className="mb-0">
                                    Raw denim you probably haven't heard of them
                                    jean shorts Austin. Nesciunt tofu stumptown
                                    aliqua, retro synth master cleanse. Mustache
                                    cliche tempor, williamsburg carles vegan
                                    helvetica. Reprehenderit butcher retro
                                    keffiyeh dreamcatcher synth. Cosby sweater
                                    eu banh mi, qui irure terry richardson ex
                                    squid. Aliquip placeat salvia cillum iphone.
                                    Seitan aliquip quis cardigan american
                                    apparel, butcher voluptate nisi qui.
                                </p>
                            </div>
                            <div
                                className="tab-pane"
                                id="profile-1"
                                role="tabpanel"
                            >
                                <p className="mb-0">
                                    Food truck fixie locavore, accusamus
                                    mcsweeney's marfa nulla single-origin coffee
                                    squid. Exercitation +1 labore velit, blog
                                    sartorial PBR leggings next level wes
                                    anderson artisan four loko farm-to-table
                                    craft beer twee. Qui photo booth
                                    letterpress, commodo enim craft beer mlkshk
                                    aliquip jean shorts ullamco ad vinyl cillum
                                    PBR. Homo nostrud organic, assumenda labore
                                    aesthetic magna 8-bit.
                                </p>
                            </div>
                            <div
                                className="tab-pane"
                                id="messages-1"
                                role="tabpanel"
                            >
                                <p className="mb-0">
                                    Etsy mixtape wayfarers, ethical wes anderson
                                    tofu before they sold out mcsweeney's
                                    organic lomo retro fanny pack lo-fi
                                    farm-to-table readymade. Messenger bag
                                    gentrify pitchfork tattooed craft beer,
                                    iphone skateboard locavore carles etsy
                                    salvia banksy hoodie helvetica. DIY synth
                                    PBR banksy irony. Leggings gentrify squid
                                    8-bit cred pitchfork. Williamsburg banh mi
                                    whatever gluten-free.
                                </p>
                            </div>
                            <div
                                className="tab-pane"
                                id="settings-1"
                                role="tabpanel"
                            >
                                <p className="mb-0">
                                    Trust fund seitan letterpress, keytar raw
                                    denim keffiyeh etsy art party before they
                                    sold out master cleanse gluten-free squid
                                    scenester freegan cosby sweater. Fanny pack
                                    portland seitan DIY, art party locavore wolf
                                    cliche high life echo park Austin. Cred
                                    vinyl keffiyeh DIY salvia PBR, banh mi
                                    before they sold out farm-to-table.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* end card-body */}
                </div>
            </div>
            <hr />
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Sub Modulue/Menu</h4>
                    </div>
                    {/* end card header */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <div
                                    className="nav flex-column nav-pills"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <a
                                        className="nav-link mb-2 active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        href="#v-pills-home"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        Home
                                    </a>
                                    <a
                                        className="nav-link mb-2"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        href="#v-pills-profile"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                    >
                                        Profile
                                    </a>
                                    <a
                                        className="nav-link mb-2"
                                        id="v-pills-messages-tab"
                                        data-bs-toggle="pill"
                                        href="#v-pills-messages"
                                        role="tab"
                                        aria-controls="v-pills-messages"
                                        aria-selected="false"
                                    >
                                        Messages
                                    </a>
                                    <a
                                        className="nav-link"
                                        id="v-pills-settings-tab"
                                        data-bs-toggle="pill"
                                        href="#v-pills-settings"
                                        role="tab"
                                        aria-controls="v-pills-settings"
                                        aria-selected="false"
                                    >
                                        Settings
                                    </a>
                                </div>
                            </div>
                            {/* end col */}
                            <div className="col-md-9">
                                <div
                                    className="tab-content text-muted mt-4 mt-md-0"
                                    id="v-pills-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >
                                        <p>
                                            Raw denim you probably haven't heard
                                            of them jean shorts Austin. Nesciunt
                                            tofu stumptown aliqua, retro synth
                                            master cleanse. Mustache cliche
                                            tempor, williamsburg carles vegan
                                            helvetica. Reprehenderit butcher
                                            retro keffiyeh dreamcatcher synth.
                                            Cosby sweater eu banh mi, qui irure
                                            terry richardson ex squid. Aliquip
                                            placeat salvia cillum iphone. Seitan
                                            aliquip quis cardigan.
                                        </p>
                                        <p>
                                            Reprehenderit butcher retro keffiyeh
                                            dreamcatcher synth. Cosby sweater eu
                                            banh mi, qui irure terry richardson
                                            ex squid.
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                    >
                                        <p>
                                            Food truck fixie locavore, accusamus
                                            mcsweeney's marfa nulla
                                            single-origin coffee squid.
                                            Exercitation +1 labore velit, blog
                                            sartorial PBR leggings next level
                                            wes anderson artisan four loko
                                            farm-to-table craft beer twee. Qui
                                            photo booth letterpress, commodo
                                            enim craft beer mlkshk.
                                        </p>
                                        <p className="mb-0">
                                            {" "}
                                            Qui photo booth letterpress, commodo
                                            enim craft beer mlkshk aliquip jean
                                            shorts ullamco ad vinyl cillum PBR.
                                            Homo nostrud organic, assumenda
                                            labore aesthetic magna 8-bit
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-messages"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab"
                                    >
                                        <p>
                                            Etsy mixtape wayfarers, ethical wes
                                            anderson tofu before they sold out
                                            mcsweeney's organic lomo retro fanny
                                            pack lo-fi farm-to-table readymade.
                                            Messenger bag gentrify pitchfork
                                            tattooed craft beer, iphone
                                            skateboard locavore carles etsy
                                            salvia banksy hoodie helvetica. DIY
                                            synth PBR banksy irony. Leggings
                                            gentrify squid 8-bit cred.
                                        </p>
                                        <p className="mb-0">
                                            DIY synth PBR banksy irony. Leggings
                                            gentrify squid 8-bit cred pitchfork.
                                            Williamsburg banh mi whatever
                                            gluten-free.
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-settings"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-settings-tab"
                                    >
                                        <p>
                                            Trust fund seitan letterpress,
                                            keytar raw denim keffiyeh etsy art
                                            party before they sold out master
                                            cleanse gluten-free squid scenester
                                            freegan cosby sweater. Fanny pack
                                            portland seitan DIY, art party
                                            locavore wolf cliche high life echo
                                            park Austin. Cred vinyl keffiyeh DIY
                                            salvia PBR, banh mi before they sold
                                            out farm-to-table.
                                        </p>
                                        <p className="mb-0">
                                            Fanny pack portland seitan DIY, art
                                            party locavore wolf cliche high life
                                            echo park Austin. Cred vinyl
                                            keffiyeh DIY salvia PBR, banh mi
                                            before they sold out farm-to-table.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*  end col */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end card-body */}
                </div>
                {/* end card */}
            </div>
        </div>
    );
}
